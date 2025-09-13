
'use client';

import type { Stylist } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BioDisplayProps {
  stylist: Stylist;
}

export default function BioDisplay({ stylist }: BioDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <CardTitle className="font-headline text-2xl">About {stylist.name}</CardTitle>
                <CardDescription>
                Our talented stylist.
                </CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-wrap">{stylist.bio}</p>
      </CardContent>
    </Card>
  );
}
