'use client';

import { useState } from 'react';
import type { Stylist } from '@/lib/types';
import { generateStylistBioAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

interface BioGeneratorProps {
  stylist: Stylist;
}

export default function BioGenerator({ stylist }: BioGeneratorProps) {
  const [bio, setBio] = useState(stylist.bio);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateBio = async () => {
    setIsLoading(true);
    const result = await generateStylistBioAction({
      name: stylist.name,
      skills: stylist.specialties,
      experience: stylist.experience,
      customerReviews: stylist.reviews.map((r) => r.review),
    });

    if (result.success && result.data) {
      setBio(result.data.bio);
      toast({
        title: 'Bio Generated!',
        description: 'A new bio has been successfully generated for ' + stylist.name,
      });
    } else {
        toast({
            title: 'Error Generating Bio',
            description: result.error || 'An unknown error occurred.',
            variant: 'destructive',
        })
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <CardTitle className="font-headline text-2xl">About {stylist.name}</CardTitle>
                <CardDescription>
                AI-powered bio based on skills and reviews.
                </CardDescription>
            </div>
            <Button onClick={handleGenerateBio} disabled={isLoading}>
                <Wand2 className="mr-2 h-4 w-4" />
                {isLoading ? 'Generating...' : 'Generate New Bio'}
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-wrap">{bio}</p>
      </CardContent>
    </Card>
  );
}
