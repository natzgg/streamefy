"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const onSubmit = () => {
    //todo onSubmit search
  };
  return (
    <form onSubmit={() => {}} className="w-full lg:w-[400px] flex items-center">
      <div className="flex items-center">
        <Input
          placeholder="Search"
          className="bg-primary-foreground rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        <Button
          type="submit"
          variant="secondary"
          className="rounded-l-none"
          size="sm"
        >
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </form>
  );
};

export default Search;
