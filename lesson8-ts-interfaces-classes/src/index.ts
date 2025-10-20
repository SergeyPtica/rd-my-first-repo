import { fetchUser } from './api';
import { UserSummary } from './transform';
import { SummaryEntity, MetricEntity } from './abstraction';

async function main(): Promise<void> {
    // Завантажуємо користувача (типізовано)
    const user = await fetchUser(1);

    // Конвертуємо в UserSummary через конструктор
    const summary = new UserSummary(user);

    // Використовуємо абстракцію
    const summaryEntity = new SummaryEntity(summary.shortInfo());
    const metricEntity = new MetricEntity(summary.aggregatedScore);

    // Демонстрація методів
    console.log('User raw id:', user.id);
    console.log('User short info:', summary.shortInfo());
    console.log('User contact:', summary.contact);
    console.log('SummaryEntity describe():', summaryEntity.describe());
    console.log('MetricEntity describe():', metricEntity.describe());

    // Маніпуляції
    summaryEntity.updateSummary(`${summary.shortInfo()} [updated]`);
    metricEntity.increment(5);

    console.log('Updated SummaryEntity:', summaryEntity.getSummary());
    console.log('Updated MetricEntity metric:', metricEntity.getMetric());
}

main().catch((err) => {
    console.error('Error:', err);
    process.exitCode = 1;
});
