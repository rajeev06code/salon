
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { services, stylists } from '@/lib/data';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from './ui/dialog';

const bookingSchema = z.object({
  service: z.string().min(1, 'Please select a service.'),
  stylist: z.string().min(1, 'Please select a stylist.'),
  date: z.date({
    required_error: 'A date is required.',
  }),
  time: z.string().min(1, 'Please select a time slot.'),
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
});

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

interface BookingModalProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function BookingModal({ children, open, onOpenChange }: BookingModalProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
        name: '',
        phone: '',
        service: '',
        stylist: '',
        time: '',
    }
  });

  function onSubmit(data: z.infer<typeof bookingSchema>) {
    console.log(data);
    toast({
      title: "Appointment Booked!",
      description: `Thank you, ${data.name}. We'll see you on ${format(data.date, 'PPP')} at ${data.time}.`,
    })
    form.reset();
    onOpenChange?.(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="grid md:grid-cols-2">
            <div className="relative hidden h-full md:h-auto md:block">
                <Image 
                    src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg"
                    alt="Woman receiving beauty treatment"
                    data-ai-hint="facial treatment"
                    fill
                    className="object-cover rounded-l-lg"
                />
            </div>
            <div className="p-8">
                <DialogHeader>
                <DialogTitle className="font-headline text-3xl text-primary">Book Your Appointment</DialogTitle>
                <DialogDescription>
                    Just a few clicks away from your transformation.
                </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {services.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="stylist"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Stylist</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a stylist" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                <SelectItem value="any">Any Available</SelectItem>
                                {stylists.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant={'outline'}
                                    className={cn(
                                        'w-full pl-3 text-left font-normal',
                                        !field.value && 'text-muted-foreground'
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, 'PPP')
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                    date < new Date(new Date().setDate(new Date().getDate() - 1))
                                    }
                                    initialFocus
                                />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                {timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>


                    <Button type="submit" size="lg" className="w-full">Confirm Booking</Button>
                    </form>
                </Form>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
