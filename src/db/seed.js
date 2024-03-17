const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Seed data for users
  const users = [
    {
      email: "user1@example.com",
      name: "User 1",
    },
    {
      email: "user2@example.com",
      name: "User 2",
    },
  ];

  // Seed data for posts
  const posts = [
    {
      title: "Post 1",
      content: "Content of post 1",
      published: true,
      authorId: 1,
    },
    {
      title: "Post 2",
      content: "Content of post 2",
      published: true,
      authorId: 2,
    },
  ];

  // Insert users and posts into the database
  for (const userData of users) {
    await prisma.user.create({
      data: userData,
    });
  }

  for (const postData of posts) {
    await prisma.post.create({
      data: postData,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
