const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    RUN:  Symbol("run"),
    FIGHT: Symbol("fight"),
    CUT: Symbol("cut"),
    FREE: Symbol("free"),
    CALL: Symbol("call"),
    KILL: Symbol("kill"),
    OPEN: Symbol("open"),
    PICK: Symbol("pick"),
    THROW: Symbol("throw"),
    GUN: Symbol("gun"),
    CRAWL: Symbol("crawl"),
    FLEE: Symbol("flee"),
    CLIMB: Symbol("climb"),
    DROP: Symbol("drop"),
    JUMP: Symbol("jump"),
    SWIM: Symbol("swim"),
    OUT: Symbol("out"),
    EXIT: Symbol("exit")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Welcome to the Halloween Party! Terrorists are coming and what do you want to do..RUN or FIGHT?";
                this.stateCur = GameState.RUN;
                break;

            case GameState.RUN:
                if(sInput.toLowerCase().match("run")){
                    sReply = "OHH! They catch you and your brother in a cage. Fortunately, you got the knife..now cut the rope?";
                    this.stateCur = GameState.CUT;
                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
                }
                break;
         
            case GameState.CUT:
                if(sInput.toLowerCase().match("cut")){
                    sReply = "Good Job! Do you want to free your brother or Run without him?";
                    this.stateCur = GameState.FREE;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;
                
                case GameState.FREE:
                if(sInput.toLowerCase().match("free")){
                    sReply = "Come on brother! We need to get out of here..Just do one thing..Call the guards!!";
                    this.stateCur = GameState.CALL;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.CALL:
                if(sInput.toLowerCase().match("call")){
                    sReply = "Hey..over here..I need your help...Gaurd is coming kill him?";
                    this.stateCur = GameState.KILL;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;


                case GameState.KILL:
                if(sInput.toLowerCase().match("kill")){
                    sReply = "Bravo!! Now, you need to open the cage to go out!! Open it?";
                    this.stateCur = GameState.OPEN;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.OPEN:
                if(sInput.toLowerCase().match("open")){
                    sReply = "Good Job!! Now lets go.. there is a knife and a map!!Just pick that up???";
                    this.stateCur = GameState.PICK;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.PICK:
                if(sInput.toLowerCase().match("pick")){
                    sReply = "Nice!! Now Go ahed. OHH! There is another gaurd over there..Just throw the knife to kill him??? ";
                    this.stateCur = GameState.THROW;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.THROW:
                if(sInput.toLowerCase().match("throw")){
                    sReply = "Good Shot!!! Lets go.. I think, we need some guns and ammo for the next one!!Pick that guns and ammo????";
                    this.stateCur = GameState.GUN;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.GUN:
                if(sInput.toLowerCase().match("gun")){
                    sReply = "Nice!! You got that. There are lots of gaurds over there. We just need to crawl down from that bridge. Crawl???";
                    this.stateCur = GameState.CRAWL;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.CRAWL:
                if(sInput.toLowerCase().match("crawl")){
                    sReply = "Go slowly over there!!! Whoooo...I never should made this alone. Thanks and I promise that, I take care of you as well.. (GUNSHOT)..OHH Carp,,They killed your brother..want to run(flee) or fight???";
                    this.stateCur = GameState.FLEE;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;

                case GameState.FLEE:
                if(sInput.toLowerCase().match("flee")){
                    sReply = "Go fast!! They are behind you..there is a rope over there..Climb?";
                    this.stateCur = GameState.CLIMB;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
    
                }
                break;

                case GameState.CLIMB:
                if(sInput.toLowerCase().match("climb")){
                    sReply = "Good Job!! Just Keep it up..Go fast now..Nice Job!! There is a car over there! Take that and get out of this place for now!! I am gonna come again to revenge with these guys and save my friends!!!!";
                    this.stateCur = GameState.EXIT;

                }else{
                    sReply ="You are dead! You have to start again brother!!!!";
                    this.stateCur = GameState.FIGHT;
    
                }
                break;


        }
        return([sReply]);
    }
}