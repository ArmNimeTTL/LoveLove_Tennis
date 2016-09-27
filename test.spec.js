//test push
function Tennis(){
  this.start = funtion(){

  };
  this.echo = function(){
    return 'Love-Love';
  }
}

describe('Tennis game' , function(){
  it('should echo "Love - Love" when start the game',function()){
    var tennis = new tennis();
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  }
}
