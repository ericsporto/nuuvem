export interface IJokes {
    result: Result[]
    category: []
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

export interface Result {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}


