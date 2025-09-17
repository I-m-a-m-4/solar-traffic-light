'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { analyzeTrafficData, type AnalyzeTrafficDataOutput } from '@/ai/flows/traffic-data-analysis';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, BrainCircuit, FileText, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const analysisFormSchema = z.object({
  sensorData: z.string().min(10, 'Please provide some sensor data.'),
  systemPerformanceData: z.string().min(10, 'Please provide some system performance data.'),
  reportType: z.enum(['daily', 'weekly', 'monthly']),
});

type AnalysisFormValues = z.infer<typeof analysisFormSchema>;

export default function AnalysisClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeTrafficDataOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<AnalysisFormValues>({
    resolver: zodResolver(analysisFormSchema),
    defaultValues: {
      sensorData: '',
      systemPerformanceData: '',
      reportType: 'daily',
    },
  });

  async function onSubmit(data: AnalysisFormValues) {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeTrafficData(data);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Analysis failed:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'An error occurred while analyzing the data. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-12">
      <Card className="bg-card/80 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-white font-manrope font-light tracking-tighter">Submit Data for Analysis</CardTitle>
          <CardDescription className="text-white/70">
            Enter your traffic sensor and system performance data below. Our AI will generate a detailed report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="sensorData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Sensor Data</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Vehicle counts, speed, timestamps..."
                          className="min-h-[150px] bg-white/5 border-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-white/50">
                        Traffic sensor data, including vehicle counts, speed, and timestamps.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="systemPerformanceData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">System Performance Data</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Solar panel output, battery levels, uptime..."
                          className="min-h-[150px] bg-white/5 border-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-white/50">
                        System performance data, including solar panel output, battery levels, and system uptime.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="reportType"
                render={({ field }) => (
                  <FormItem className="max-w-xs">
                    <FormLabel className="text-white/70">Report Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select a report type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-white/10">
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 ring-1 ring-emerald-500/30">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Data'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {analysisResult && (
        <div className="mt-12 space-y-8">
          <h2 className="text-3xl font-bold text-center text-white">Analysis Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-b from-white/[0.03] to-transparent border-white/10">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-white">Summary</CardTitle>
                  <CardDescription>A high-level overview of the findings.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{analysisResult.summary}</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-b from-white/[0.03] to-transparent border-white/10">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-white">Optimization Suggestions</CardTitle>
                  <CardDescription>Recommendations for improvements.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{analysisResult.optimizationSuggestions}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-b from-white/[0.03] to-transparent border-white/10">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-white">Generated Report</CardTitle>
                <CardDescription>The full report in markdown format.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-black/20 rounded-md max-h-[600px] overflow-auto ring-1 ring-white/10">
                <pre className="whitespace-pre-wrap text-sm text-white/80">{analysisResult.report}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
