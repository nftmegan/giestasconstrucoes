type NavigationEntry = {
    svgUrl?: string;
    title: string;
    href: string;
    subentries?: NavigationEntry[];
};
  
type Navigation = {
    entries: NavigationEntry[];
};

export type { NavigationEntry, Navigation };