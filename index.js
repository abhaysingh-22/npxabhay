#!/usr/bin/env node

import chalk from "chalk";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log();

  // ── Header ──────────────────────────────────────────────
  console.log(
    chalk.bold.hex("#00D9FF")("  🚀 ") +
      chalk.bold.hex("#00D9FF").underline("Abhay Singh")
  );
  console.log(
    chalk.gray(
      "     GenAI Full Stack Developer | AI Automation | Agents | Designer"
    )
  );
  console.log(chalk.gray("  " + "─".repeat(52)));

  await sleep(150);

  // ── Links section ───────────────────────────────────────
  console.log();
  console.log(chalk.bold.white("  🔗 Connect with me:"));
  console.log();

  const links = [
    {
      emoji: "💼",
      label: "LinkedIn ",
      url: "https://www.linkedin.com/in/abhaysingh22/",
      color: chalk.hex("#0A66C2"),
    },
    {
      emoji: "📸",
      label: "Instagram",
      url: "https://www.instagram.com/abhaysingh22_/",
      color: chalk.hex("#E1306C"),
    },
    {
      emoji: "🐦",
      label: "X        ",
      url: "https://x.com/build_nextera",
      color: chalk.hex("#1DA1F2"),
    },
    {
      emoji: "🐙",
      label: "GitHub   ",
      url: "https://github.com/abhaysingh-22",
      color: chalk.hex("#C9D1D9"),
    },
    {
      emoji: "📄",
      label: "Resume   ",
      url: "https://drive.google.com/drive/folders/1wqdrZNtHRNrWgSonwD2bExHfstKaXveE?usp=sharing",
      color: chalk.hex("#FACC15"),
    },
    {
      emoji: "📧",
      label: "Email    ",
      url: "abhaysingh6575@gmail.com",
      color: chalk.hex("#34D399"),
    },
  ];

  for (const link of links) {
    console.log(
      `     ${link.emoji} ${chalk.bold.white(link.label)} : ${link.color(link.url)}`
    );
    await sleep(80);
  }

  // ── Footer ──────────────────────────────────────────────
  console.log();
  console.log(chalk.gray("  " + "─".repeat(52)));
  console.log(
    chalk.italic.gray("     Built with ❤️  by Abhay Singh")
  );
  console.log();
}

main();
