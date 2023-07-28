export interface Circle {
	cy: number;
	cx: number;
	r: number;
}

export interface IconCircle {
	d: string | string[];
	circle?: Circle | Circle[];
}

export type TIcon = string | IconCircle;
