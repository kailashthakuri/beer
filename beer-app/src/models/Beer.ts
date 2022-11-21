export interface Ingredient {
    name: string;
    amount: {
        value: number;
        unit: string;
    }
}

export interface Beer {
    id: string,
    name: string;
    image_url: string;
    description: string;
    tagline: string;
    ingredients: { [key: string]: Array<Ingredient> | string }
}
