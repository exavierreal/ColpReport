export function FormatDateStatement(date: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    switch (date.toDateString()) {
        case (today.toDateString()):
            return 'Hoje';

        case (yesterday.toDateString)():
            return 'Ontem';

        default:
            const months = [
                'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
              ];
            
              const year = date.getFullYear().toString().slice(-2);
              const month = months[date.getMonth()];
            
              return `${month} ${year}`;
    }
}