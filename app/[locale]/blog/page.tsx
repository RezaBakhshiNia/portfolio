import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getTranslation, type Locale } from "@/lib/translations"

const blogPosts = [
  {
    id: 1,
    key: "react",
    date: "2024-01-15",
    readTime: "8",
    tags: ["React", "Performance", "Optimization"],
    slug: "building-performant-react-applications",
  },
  {
    id: 2,
    key: "nextjs",
    date: "2024-01-08",
    readTime: "12",
    tags: ["Next.js", "React", "Web Development"],
    slug: "complete-guide-nextjs-14",
  },
  {
    id: 3,
    key: "css",
    date: "2024-01-01",
    readTime: "10",
    tags: ["CSS", "Layout", "Responsive Design"],
    slug: "mastering-css-grid-flexbox",
  },
  {
    id: 4,
    key: "typescript",
    date: "2023-12-20",
    readTime: "15",
    tags: ["TypeScript", "React", "Best Practices"],
    slug: "typescript-react-advanced-patterns",
  },
  {
    id: 5,
    key: "accessibility",
    date: "2023-12-10",
    readTime: "11",
    tags: ["Accessibility", "Web Development", "UX"],
    slug: "building-accessible-web-applications",
  },
  {
    id: 6,
    key: "state",
    date: "2023-12-01",
    readTime: "9",
    tags: ["React", "State Management", "Redux"],
    slug: "react-state-management-comparison",
  },
]

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function Blog({ params }: Props) {
  const { locale } = await params
  const t = getTranslation(locale)

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t.blog.title}</h1>
          <p className="text-xl text-muted-foreground">{t.blog.subtitle}</p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      {t.blog.posts[post.key as keyof typeof t.blog.posts].title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} {t.blog.readTime}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t.blog.posts[post.key as keyof typeof t.blog.posts].excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            {t.blog.morePostsText}{" "}
            <Link href="https://twitter.com/rezabakhshinia" className="text-primary hover:underline">
              Twitter
            </Link>{" "}
            {t.blog.forUpdates}
          </p>
        </div>
      </div>
    </div>
  )
}
