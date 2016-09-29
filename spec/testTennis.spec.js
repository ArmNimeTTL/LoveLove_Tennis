function Tennis(){
  var ScoreA;
  var ScoreB;
  this.start = function(){
    ScoreA = 0;
    ScoreB = 0;
    this.GetScoreA = function(){
      if(ScoreA === 0) { ScoreA = 15; return 'Player A get Score!!'; }
      else if(ScoreA === 15) { ScoreA = 30; return 'Player A get Score!!'; }
      else if(ScoreA === 30) { ScoreA = 40; return 'Player A get Score!!'; }
      else if(ScoreA === 40){
        ScoreA = 0;
        return 'Player A won';
      }
    }
    this.GetScoreB = function(){
      if(ScoreB === 0) { ScoreB = 15; return 'Player B get Score!!'; }
      else if(ScoreB === 15) { ScoreB = 30; return 'Player B get Score!!'; }
      else if(ScoreB === 30) { ScoreB = 40; return 'Player B get Score!!'; }
      else if(ScoreB === 40){
        ScoreB = 0;
        return 'Player B is won';
      }
    }
  };
  this.echo = function(){
    if(ScoreA === 0 && ScoreB === 0) return 'Love - Love';
    else if(ScoreA === 15 && ScoreB === 15) return 'Fifteen - Fifteen';
    else if(ScoreA === 30 && ScoreB === 15) return 'Thirty - Fifteen';
    else if(ScoreA === 15 && ScoreB === 30) return 'Fifteen - Thirty';
    else if(ScoreA === 30 && ScoreB === 30) return 'Thirty - Thirty';
    else if(ScoreA === 40 && ScoreB === 30) return 'Forty - Thirty';
    else if(ScoreA === 30 && ScoreB === 40) return 'Thirty - Forty';
    else if(ScoreA === 15 && ScoreB === 40) return 'Fifteen - Forty';
    else if(ScoreA === 40 && ScoreB === 15) return 'Forty - Fifteen';
    else if(ScoreA === 15 && ScoreB === 0) return 'Fifteen - Love';
    else if(ScoreA === 30 && ScoreB === 0) return 'Thirty - Love';
    else if(ScoreA === 40 && ScoreB === 0) return 'Forty - Love';
    else if(ScoreA === 0 && ScoreB === 15) return 'Love - Fifteen';
    else if(ScoreA === 0 && ScoreB === 30) return 'Love - Thirty';
    else if(ScoreA === 0 && ScoreB === 40) return 'Love - Forty';
  };
}

describe('Tennis game' , function() {
  var tennis = new Tennis();
  //--------------------------- Player A -------------------------------------//
  it('should echo "Love - Love" when start the game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should echo "Fifteen - Love" when Player A get score 15',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });
  it('should echo "Thirty - Love" when Player A get score 30',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });
  it('should echo "Forty - Love" when Player A get score 40',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  });
  it('should echo "player A won" when Player A get score 40',function(){
    tennis.GetScoreA();
    //expect(tennis.winner()).toEqual('player A is Winner');
  });
  //--------------------------- Player B -------------------------------------//
  it('should echo "Love - Love" when start the game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should echo "Love - Fifteen" when Player B get score 15',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('should echo "Love - Thirty" when Player B get score 30',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
  it('should echo "Love - Forty" when Player B get score 40',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Love - Forty');
  });
  it('should echo "player B won" when Player B get score 40',function(){
    tennis.GetScoreB();
  });
  //--------------------------------------------------------------------------//
  it('should echo "Love - Love" when start the game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should echo "Fifteen - Love" when Player A get score',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });
  it('should echo "Fifteen - Fifteen" when Player B get score',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  });
  it('should echo "Thirty - Fifteen" when PLayer B get score',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Thirty - Fifteen');
  })

});
