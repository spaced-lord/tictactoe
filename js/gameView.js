export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class="header">
            <div class="header__turn">
                X's turn
            </div>
            <div class="header__status">
                In Progress
            </div>
            <button type="button" class="header__restart">
                <i class="material-icons">refresh</i>
            </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0">O</div>
                <div class="board__tile" data-index="1">O</div>
                <div class="board__tile board__tile-winner" data-index="2">O</div>
                <div class="board__tile" data-index="3">O</div>
                <div class="board__tile" data-index="4">O</div>
                <div class="board__tile" data-index="5">O</div>
                <div class="board__tile" data-index="6">O</div>
                <div class="board__tile" data-index="7">O</div>
                <div class="board__tile" data-index="8">O</div>
            </div>
            `;
    }
}