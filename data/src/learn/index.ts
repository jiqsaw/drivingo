export const LEARN_CATEGORIES = [
    { name: 'attitude', pages: 5 },
    { name: 'alertness', pages: 5 },
    { name: 'essential-documents', pages: 5 },
    { name: 'hazard-awareness', pages: 6 },
    { name: 'incidents-accidents-and-emergencies', pages: 7 },
    { name: 'motorway-rules', pages: 7 },
    { name: 'other-types-of-vehicle', pages: 6 },
    { name: 'road-and-traffic-signs', pages: 7 },
    { name: 'rules-of-the-road', pages: 9 },
    { name: 'safety-and-your-vehicle', pages: 6 },
    { name: 'safety-margins', pages: 6 },
    { name: 'vehicle-handling', pages: 6 },
    { name: 'vehicle-loading', pages: 4 },
    { name: 'vulnerable-road-users', pages: 9 },
] as const;

import topics from './study-topics';

type Category = (typeof LEARN_CATEGORIES)[number]['name'];

interface LearnContent {
    title: string;
    content: string;
}

export const loadCategoryPage = async (
    category: Category,
    pageNumber: number,
): Promise<LearnContent> => {
    try {
        const module = await import(`./${category}/page${pageNumber}.tsx`);
        return module.default;
    } catch (error) {
        console.error(
            `Error loading page ${pageNumber} for category ${category}:`,
            error,
        );
        throw error;
    }
};

export const loadAllPagesForCategory = async (
    category: Category,
): Promise<Record<string, LearnContent>> => {
    const categoryInfo = LEARN_CATEGORIES.find((c) => c.name === category);
    if (!categoryInfo) {
        throw new Error(`Category ${category} not found`);
    }

    const pages: Record<string, LearnContent> = {};
    for (let i = 1; i <= categoryInfo.pages; i++) {
        try {
            pages[`page${i}`] = await loadCategoryPage(category, i);
        } catch (error) {
            console.error(`Failed to load page ${i} for category ${category}`);
        }
    }
    return pages;
};

// Örnek kullanım için export edilen veri yapısı (isteğe bağlı kullanılabilir)
export const DATA_LEARN: Record<
    Category,
    Record<string, LearnContent>
> = {} as any;
export const DATA_LEARN_TOPICS = topics;
