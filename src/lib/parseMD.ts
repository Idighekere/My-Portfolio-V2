import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import grayMatter from 'gray-matter'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import remarkImages from 'remark-images'

// This function reads the markdown content, parses front matter, and converts markdown to HTML
/* //TODO - I'm gonna comeback to organise the markdown into folders.
  - using the structure
  ├── will-be-there/
│   ├── index.md
│   └── images/
│       └── will-be-there.png

*/

export const parseMD = async (filePath:string) => {

    const absolutePath = path.join(process.cwd(), filePath)
// const MDContent =  fs.readFile(filePath, 'utf8')
// console.log("FilePath",filePath)
  const markdownContent = fs?.readFileSync(filePath, 'utf-8') // Read markdown file

  // Using gray-matter to parse the front matter (metadata) and the markdown content
  const { data, content } = grayMatter(markdownContent)

 // console.log("content",content)
  //Convert markdown content to HTML using remark
  const file = await remark()
  .use(remarkHtml).use(remarkImages as any).process(content)// Converts Markdown to HTML
    //Process markdown content

// const file = await unified()
//   .use(remarkParse) // Parse markdown content to a syntax tree
//   .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
//   .use(rehypeStringify) // Serialize HTML syntax tree
//   .process(markdownContent)


  const htmlContent = String(file) // Convert the result to a string
  //console.log("HTMLC",htmlContent)
//   const styledHtml = `<div class="prose lg:prose-xl">${htmlContent}</div>`
// console.log(styledHtml)

return {
  metadata: data, // Returns the front matter metadata (e.g., title, date)
  content: htmlContent // Returns the HTML content
}

}
