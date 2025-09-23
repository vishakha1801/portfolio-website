#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const SUBSTACK_ARCHIVE_URL = "https://vishakhapathak.substack.com/api/v1/archive?sort=new";
const OUTPUT_PATH = path.resolve("src/data/substack.json");

const mediumDate = new Intl.DateTimeFormat("en", { dateStyle: "medium" });

const formatReadTime = (wordcount) => {
  if (!wordcount || wordcount <= 0) return "";
  const minutes = Math.max(1, Math.round(wordcount / 200));
  return `${minutes} min read`;
};

const cleanExcerpt = (text) => (text ? text.replace(/\s+/g, " ").trim() : "");

const pickImage = (post) =>
  post.cover_image || post.image || post.post_image_url || post.social_image || post.og_image || null;

const mapPost = (post) => ({
  id: post.id,
  title: post.title || "Untitled",
  excerpt: cleanExcerpt(post.description) || cleanExcerpt(post.truncated_body_text) || "",
  publishDate: mediumDate.format(new Date(post.post_date ?? Date.now())),
  readTime: formatReadTime(post.wordcount),
  url: post.canonical_url
    ? post.canonical_url
    : post.slug
    ? `https://vishakhapathak.substack.com/p/${post.slug}`
    : "https://vishakhapathak.substack.com",
  imageUrl: pickImage(post),
  tags: (post.postTags ?? [])
    .map((tag) => tag.name || tag.display_name || tag.slug)
    .filter(Boolean),
});

async function fetchPosts() {
  const response = await fetch(SUBSTACK_ARCHIVE_URL, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Substack responded with ${response.status}`);
  }

  const data = await response.json();
  return data
    .filter((post) => (post.audience ?? "everyone") === "everyone")
    .slice(0, 4)
    .map(mapPost);
}

async function main() {
  try {
    const articles = await fetchPosts();
    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(
      OUTPUT_PATH,
      JSON.stringify({ generatedAt: new Date().toISOString(), articles }, null, 2)
    );
    console.log(`Fetched ${articles.length} Substack posts → ${OUTPUT_PATH}`);
  } catch (error) {
    console.warn("⚠️  Could not fetch Substack posts. Using previously generated data if available.");
    console.warn(error.message || error);
  }
}

main();
