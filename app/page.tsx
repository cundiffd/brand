// Copyright © Spatial Corporation. All rights reserved.

import { clsx } from "clsx";

import { Button, Container, Head, Icon, Link, Page, Tag, Text, Thoughts, Timeline, View } from "@dakarai/components";

const skills = [
  {
    name: "Web & Programming",
    color: "bg-blue",
    skills: [
      "C#",
      "C++",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "API Development",
      "Full-Stack Development"
    ]
  },
  {
    name: "Software Engineering & DevOps",
    color: "bg-lime",
    skills: [
      "Git Version Control",
      "CI/CD Pipelines",
      "DevOps Practices",
      "Project Management",
      "Testing & Debugging",
      "Software Architecture",
      "Cloud Platforms (AWS / Azure)"
    ]
  },
  {
    name: "AI & Machine Learning",
    color: "bg-red",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "Data Analysis",
      "Mathematics & Statistics",
      "Computer Vision",
      "Natural Language Processing"
    ]
  },
  {
    name: "Game & Interactive Design",
    color: "bg-yellow",
    skills: ["Game Design", "Level Design", "3D Modeling & Animation", "Physics Simulations", "User Experience (UX) Design"]
  },
  {
    name: "Creative Arts & Media",
    color: "bg-cyan",
    skills: ["Graphic Design", "Filming & Videography", "Video Editing", "Photography", "Digital Illustration", "Motion Graphics"]
  },
  {
    name: "Lifestyle",
    color: "bg-magenta",
    skills: [
      "Physical Training",
      "Fitness Programming",
      "Wellness Coaching",
      "Nutrition",
      "Cooking",
      "Mindfulness & Meditation",
      "Hair Design & Styling",
      "Problem Solving",
      "Critical Thinking",
      "Collaboration",
      "Leadership"
    ]
  }
];

/**
 * Create a new landing page component.
 * @returns A landing page component.
 */
export default function Landing() {
  return (
    <Page>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen flex justify-center md:justify-end overflow-hidden">
        <Head />
      </div>
      <View innerClassName="py-32 md:py-64 h-full relative" align="center">
        <Text>
          <span className="-ml-2 text-9xl md:text-display font-bold uppercase whitespace-nowrap">
            <span className="inline-block transform -scale-x-100">B</span>
            <span className="-tracking-[0.175em] -ml-8 md:-ml-16">rand</span>
          </span>
          <br />
          <span className="text-3xl md:text-6xl uppercase">By Dakarai</span>
        </Text>
      </View>
      <View className="py-16" direction="column" align="center" innerClassName="bg-background-subtle rounded-4xl py-16 md:py-24 px-8" gap={64}>
        <Tag className="bg-white! text-foreground-inverse!">About me</Tag>
        <Text className="text-xl md:max-w-1/2 text-center">
          <strong>Dakarai Cundiff (n.)</strong> &mdash; A man of faith, devoted son, uncle, and brother; driven by a passion for technology and a
          desire to make a positive impact. Known for bold leadership, focused dedication, and a commitment to excellence; strives to share knowledge
          and inspire others along the way.
        </Text>
      </View>
      <View className="py-32 md:py-64 items-center! md:items-start!" direction="column" justify="center" gap={64}>
        <Tag className="self-center! md:self-start!">Insight</Tag>
        <Container direction="column" className="text-2xl md:text-6xl font-extrabold uppercase w-full gap-4! md:gap-0!">
          <Text>You can learn the technique,</Text>
          <Text>But true passion is cultivated through</Text>
          <Text>Dedication, love, pride and respect in your work.</Text>
        </Container>
      </View>
      <View className="py-16" direction="column" align="center" innerClassName="md:max-w-1/2" gap={96}>
        <Tag>Evolution</Tag>
        <Timeline />
      </View>
      <View className="py-16" direction="column" align="center" innerClassName="md:max-w-1/2" gap={96}>
        <Tag>Passion</Tag>
        <Container justify="center" gap={16} wrap>
          {shuffle(skills.flatMap((group) => group.skills.map((skill) => ({ skill, color: group.color })))).map((skill, i) => (
            <Tag key={i} className="normal-case! font-normal flex items-center gap-3">
              <span className={clsx("w-2 h-2 rounded-full inline-block", skill.color)} />
              {skill.skill}
            </Tag>
          ))}
        </Container>
      </View>
      <View className="py-32 pb-0!" direction="column" align="center" gap={128}>
        <Tag>Open Thoughts</Tag>
        <Thoughts />
        <Link href="/blog">
          <Button className="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-active">View all</Button>
        </Link>
      </View>
      <View innerClassName="py-32 md:py-64" justify="center" align="center">
        <Link href="https://buymeacoffee.com/mrcundiff" target="_blank" className="flex items-center gap-4 md:gap-16">
          <Text className="text-5xl md:text-9xl">Support</Text>
          <Icon vector="north_east" size={96} />
        </Link>
      </View>
    </Page>
  );
}

function random(seed: number) {
  return function () {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

function shuffle<T>(array: T[], seed: number = 10): T[] {
  const rand = random(seed);
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
