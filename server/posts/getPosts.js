const posts = [
  {
    title: "Post #1",
    description: "This is the first post",
    thumbnail:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Post #2",
    description: "This is the second post",
    thumbnail:
      "https://images.unsplash.com/photo-1625034712314-7bd692b60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Post #3",
    description: "This is the third post",
    thumbnail:
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
  },
  {
    title: "Exploring the Beautiful Beaches of Bali",
    description:
      "Discover the stunning beaches of Bali with crystal clear waters and pristine white sand.",
    thumbnail:
      "https://images.unsplash.com/photo-1625034712314-7bd692b60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "Delicious Recipes for Summer BBQ Parties",
    description:
      "Get ready for a sizzling summer with these mouthwatering BBQ recipes that will impress your guests.",
    thumbnail:
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
  },
  {
    title: "The Ultimate Guide to Hiking Mount Everest",
    description:
      "Embark on a thrilling adventure to conquer the world's highest peak and witness breathtaking views.",
    thumbnail:
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
  },
  {
    title: "10 Tips for Successful Home Gardening",
    description:
      "Learn expert tips and tricks to create a flourishing garden right in your backyard.",
    thumbnail:
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
  },
  {
    title: "Unforgettable Wildlife Safari in Serengeti National Park",
    description:
      "Experience the wonders of African wildlife with a thrilling safari in the Serengeti.",
    thumbnail:
      "https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
  },
];
module.exports.getPostById = (id) => posts[id - 1];
