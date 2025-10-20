
export abstract class BaseEntity {
    protected createdAt: Date;

    public constructor() {
        this.createdAt = new Date();
    }

    public abstract describe(): string;

    public ageMs(): number {
        return Date.now() - this.createdAt.getTime();
    }
}

export class SummaryEntity extends BaseEntity {
    private summaryText: string;

    public constructor(summaryText: string) {
        super();
        this.summaryText = summaryText;
    }

    public describe(): string {
        return `Summary: ${this.summaryText}`;
    }

    public updateSummary(newText: string): void {
        this.summaryText = newText;
    }

    public getSummary(): string {
        return this.summaryText;
    }
}

export class MetricEntity extends BaseEntity {
    private metric: number;

    public constructor(metric: number) {
        super();
        this.metric = metric;
    }

    public describe(): string {
        return `Metric: ${this.metric}`;
    }

    public increment(delta = 1): void {
        this.metric += delta;
    }

    public getMetric(): number {
        return this.metric;
    }
}
