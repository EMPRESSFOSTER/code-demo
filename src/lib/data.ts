import { PlaceHolderImages } from "@/lib/placeholder-images";

export type Lesson = {
  id: string;
  title: string;
  topic: 'HTML' | 'CSS' | 'JavaScript';
  description: string;
  content: string;
  exampleCode: {
    html: string;
    css: string;
    js: string;
  };
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
};

export const lessons: Lesson[] = [
  {
    id: 'html-basics',
    title: 'HTML Basics: Elements and Tags',
    topic: 'HTML',
    description: 'Learn the fundamental building blocks of web pages.',
    content: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.\n\nWeb pages are made of HTML elements, which are represented by tags. Tags label pieces of content such as "heading", "paragraph", "table", and so on. Browsers do not display the HTML tags, but use them to render the content of the page.',
    exampleCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`,
      css: `body {
  font-family: sans-serif;
  background-color: #f0f0f0;
}`,
      js: `console.log("Hello, World!");`
    },
    quiz: {
      question: 'What does HTML stand for?',
      options: ['HyperText Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language', 'Hyper-Transferable Markup Language'],
      correctAnswer: 'HyperText Markup Language',
    },
  },
  {
    id: 'css-fundamentals',
    title: 'CSS Fundamentals: Selectors and Properties',
    topic: 'CSS',
    description: 'Discover how to style your HTML elements with CSS.',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.\n\nCSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content.',
    exampleCode: {
      html: `<h1>Styled Heading</h1>
<p class="highlight">This paragraph has a special style.</p>`,
      css: `h1 {
  color: blue;
  text-align: center;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}`,
      js: ''
    },
    quiz: {
      question: 'Which property is used to change the background color?',
      options: ['color', 'bgcolor', 'background-color', 'background'],
      correctAnswer: 'background-color',
    },
  },
  {
    id: 'js-variables',
    title: 'JavaScript Essentials: Variables',
    topic: 'JavaScript',
    description: 'Understand how to store and manage data using variables.',
    content: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.\n\nVariables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. The `let` keyword allows you to declare block-scoped variables. The `const` keyword is used for variables that will not be reassigned.',
    exampleCode: {
      html: `<p id="demo"></p>`,
      css: `p {
  font-size: 18px;
  font-family: monospace;
}`,
      js: `let name = "Voyager";
const score = 100;
document.getElementById("demo").innerHTML = "Hello, " + name + "! Your score is " + score;`
    },
    quiz: {
      question: 'Which keyword is used to declare a variable that cannot be reassigned?',
      options: ['var', 'let', 'const', 'static'],
      correctAnswer: 'const',
    },
  },
];

export const placeholderImages = {
  htmlIcon: PlaceHolderImages.find(p => p.id === 'html-icon'),
  cssIcon: PlaceHolderImages.find(p => p.id === 'css-icon'),
  jsIcon: PlaceHolderImages.find(p => p.id === 'js-icon'),
  projectThumbnails: [
    PlaceHolderImages.find(p => p.id === 'project-thumbnail-1'),
    PlaceHolderImages.find(p => p.id === 'project-thumbnail-2'),
    PlaceHolderImages.find(p => p.id === 'project-thumbnail-3'),
  ],
  avatars: [
    PlaceHolderImages.find(p => p.id === 'user-avatar-1'),
    PlaceHolderImages.find(p => p.id === 'user-avatar-2'),
    PlaceHolderImages.find(p => p.id === 'user-avatar-3'),
  ],
  userProfile: PlaceHolderImages.find(p => p.id === 'user-profile'),
}

export const leaderboardData = [
  { rank: 1, name: 'Alex', points: 1250, avatar: placeholderImages.avatars[0]?.imageUrl },
  { rank: 2, name: 'Brenda', points: 1100, avatar: placeholderImages.avatars[1]?.imageUrl },
  { rank: 3, name: 'Charlie', points: 1050, avatar: placeholderImages.avatars[2]?.imageUrl },
  { rank: 4, name: 'You', points: 980, avatar: placeholderImages.userProfile?.imageUrl },
  { rank: 5, name: 'David', points: 950, avatar: 'https://picsum.photos/seed/user4/40/40' },
  { rank: 6, name: 'Eva', points: 870, avatar: 'https://picsum.photos/seed/user5/40/40' },
];

export const projectsData = [
  { id: 1, name: "My First Website", lastModified: "3 days ago", thumbnail: placeholderImages.projectThumbnails[0]?.imageUrl },
  { id: 2, name: "CSS Grid Layout", lastModified: "1 week ago", thumbnail: placeholderImages.projectThumbnails[1]?.imageUrl },
  { id: 3, name: "JS Counter App", lastModified: "2 weeks ago", thumbnail: placeholderImages.projectThumbnails[2]?.imageUrl },
];
