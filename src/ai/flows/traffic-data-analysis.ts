'use server';

/**
 * @fileOverview AI-powered tool to analyze traffic patterns and system performance data.
 *
 * - analyzeTrafficData - A function that handles the traffic data analysis process.
 * - AnalyzeTrafficDataInput - The input type for the analyzeTrafficData function.
 * - AnalyzeTrafficDataOutput - The return type for the analyzeTrafficData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTrafficDataInputSchema = z.object({
  sensorData: z
    .string()
    .describe(
      'Traffic sensor data, including vehicle counts, speed, and timestamps.'
    ),
  systemPerformanceData: z
    .string()
    .describe(
      'System performance data, including solar panel output, battery levels, and system uptime.'
    ),
  reportType: z
    .enum(['daily', 'weekly', 'monthly'])
    .describe('The type of report to generate.'),
});
export type AnalyzeTrafficDataInput = z.infer<typeof AnalyzeTrafficDataInputSchema>;

const AnalyzeTrafficDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the traffic patterns and system performance.'),
  optimizationSuggestions: z
    .string()
    .describe('Suggestions for optimizing traffic flow and energy use.'),
  report: z.string().describe('The generated report in markdown format.'),
});
export type AnalyzeTrafficDataOutput = z.infer<typeof AnalyzeTrafficDataOutputSchema>;

export async function analyzeTrafficData(
  input: AnalyzeTrafficDataInput
): Promise<AnalyzeTrafficDataOutput> {
  return analyzeTrafficDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTrafficDataPrompt',
  input: {schema: AnalyzeTrafficDataInputSchema},
  output: {schema: AnalyzeTrafficDataOutputSchema},
  prompt: `You are an AI-powered tool that analyzes traffic patterns and system performance data from a smart solar-powered traffic system.

  Analyze the provided data and generate a report of type "{{reportType}}".

  Sensor Data: {{{sensorData}}}
  System Performance Data: {{{systemPerformanceData}}}

  Provide a summary of the traffic patterns and system performance, suggest optimizations for traffic flow and energy use, and generate a comprehensive report in markdown format.

  Ensure the report includes:
  - Executive Summary
  - Key Findings
  - Recommendations
  - Data tables and visualizations (if possible with markdown)
  `,
});

const analyzeTrafficDataFlow = ai.defineFlow(
  {
    name: 'analyzeTrafficDataFlow',
    inputSchema: AnalyzeTrafficDataInputSchema,
    outputSchema: AnalyzeTrafficDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
