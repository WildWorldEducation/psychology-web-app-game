var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'phaser-game',
        backgroundColor: '#000000',

        scene: [MenuScene, ParametersScene, LeftTaskScene, RightTaskScene, BothTasksScene]
    };
    game = new Phaser.Game(config);

    // Get parameters stored in the localstorage.
    var parameters = localStorage.getItem('parameters');
    var defaultParameters = {
        left_climb_rate: 1,
        left_drop_amount: 16,
        left_penalty_amount: 10,
        left_delay_amount: 200,
        right_climb_rate: 1,
        right_drop_amount: 14,
        right_penalty_amount: 10,
        right_delay_amount: 200,
    }
    var data = {};
    try {
        if(parameters){
            data = JSON.parse(parameters);
        }else{
            console.log('No data in localstorage');
            data = defaultParameters;
            localStorage.setItem('parameters', JSON.stringify(defaultParameters));
        }
    } catch (error) {
        console.log('JSON parse error');
        data = defaultParameters;
        localStorage.setItem('parameters', JSON.stringify(defaultParameters));
    }
    
    // Load existing data onto the form on the Parameters page.
    document.getElementById("l_bar_up_rate").value = data.left_climb_rate;
    document.getElementById("l_bar_down_rate").value = data.left_drop_amount;
    document.getElementById("l_bar_penalty_rate").value = data.left_penalty_amount;
    document.getElementById("l_bar_delay_amount").value = data.left_delay_amount;
    document.getElementById("r_bar_up_rate").value = data.right_climb_rate;
    document.getElementById("r_bar_down_rate").value = data.right_drop_amount;
    document.getElementById("r_bar_penalty_rate").value = data.right_penalty_amount;
    document.getElementById("r_bar_delay_amount").value = data.right_delay_amount;

    // Load the data into Phaser.
    game.config.lClimbRate = data.left_climb_rate;
    game.config.lDropRate = data.left_drop_amount;
    game.config.lPenaltyRate = data.left_penalty_amount;
    game.config.lDelayAmount = data.left_delay_amount;
    game.config.rClimbRate = data.right_climb_rate;
    game.config.rDropRate = data.right_drop_amount;
    game.config.rPenaltyRate = data.right_penalty_amount;
    game.config.rDelayAmount = data.right_delay_amount;

    
    
}