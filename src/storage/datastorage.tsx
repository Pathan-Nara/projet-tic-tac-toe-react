export const dataStorage = {
    save(username: string, score: number) {
        const data = localStorage.getItem('scores');
        const scores = data ? JSON.parse(data) : [];
        scores.push({ username, score });
        localStorage.setItem('scores', JSON.stringify(scores));
    },

    getAll() {
        const data = localStorage.getItem('scores');
        return data ? JSON.parse(data) : [];
    },

    sort(){
        const data = localStorage.getItem('scores');
        const scores = data ? JSON.parse(data) : [];
        scores.sort((a: { score: number }, b: { score: number }) => b.score - a.score);
        return scores;
    }

}