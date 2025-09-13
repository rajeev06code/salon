import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tips, trends, and inspiration from our experts.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group flex flex-col overflow-hidden">
                <div className="relative h-56 w-full">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        data-ai-hint={post.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
                <CardHeader>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="font-headline text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                        <Link href={post.slug}>{post.title}</Link>
                    </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0">
                        <Link href={post.slug}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">Visit Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
