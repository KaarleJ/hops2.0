import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface CourseFormFieldsProps {
  form: UseFormReturn<
    {
      name: string;
      code: string;
      ects: string;
      year: string;
      startPeriod: string;
      endPeriod: string;
    },
    any,
    undefined
  >;
}

export default function CourseFormFields({ form }: CourseFormFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course name</FormLabel>
            <FormControl>
              <Input placeholder="Course name..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Course code</FormLabel>
            <FormControl>
              <Input placeholder="Course code..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-row justify-between">
        <FormField
          control={form.control}
          name="ects"
          render={({ field }) => (
            <FormItem className="w-full pr-3">
              <FormLabel>ECTS</FormLabel>
              <FormControl>
                <Input type="number" placeholder="ects..." min={0} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem className="w-full pl-3">
              <FormLabel>year</FormLabel>
              <FormControl>
                <Input type="number" placeholder="year..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-row justify-between">
        <FormField
          control={form.control}
          name="startPeriod"
          render={({ field }) => (
            <FormItem className="w-full pr-3">
              <FormLabel>Starting period</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Start period..."
                  min={1}
                  max={5}
                  {...field}
                  onChange={(e) => {
                    const endValue = form.getValues("endPeriod");
                    if (e.target.value > endValue) {
                      form.setValue("endPeriod", e.target.value);
                    }
                    form.setValue("startPeriod", e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endPeriod"
          render={({ field }) => (
            <FormItem className="w-full pl-3">
              <FormLabel>Ending period</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="End period"
                  min={1}
                  max={5}
                  {...field}
                  onChange={(e) => {
                    const startValue = form.getValues("startPeriod");
                    if (e.target.value < startValue) {
                      form.setValue("startPeriod", e.target.value);
                    }
                    form.setValue("endPeriod", e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
