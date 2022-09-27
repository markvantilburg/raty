describe('options', function () {
  beforeEach(function () {
    // Helper.create('#el');
  });

  it('has the right default values', function () {
    // given
    var raty = new Raty('#el');

    // when
    var opt = raty.opt;

    // then
    expect(opt.cancelButton).toBeFalsy();
    expect(opt.cancelClass).toEqual('raty-cancel');
    expect(opt.cancelHint).toEqual('Cancel this rating!');
    expect(opt.cancelOff).toEqual('cancel-off.png');
    expect(opt.cancelOn).toEqual('cancel-on.png');
    expect(opt.cancelPlace).toEqual('left');
    expect(opt.click).toBeUndefined();
    expect(opt.half).toBeFalsy();
    expect(opt.halfShow).toBeTruthy();
    expect(opt.hints).toEqual(['bad', 'poor', 'regular', 'good', 'gorgeous']);
    expect(opt.iconRange).toBeUndefined();
    expect(opt.mouseover).toBeUndefined();
    expect(opt.noRatedMsg).toEqual('Not rated yet!');
    expect(opt.number).toBe(5);
    expect(opt.path).toBeUndefined();
    expect(opt.precision).toBeFalsy();
    expect(opt.readOnly).toBeFalsy();
    expect(opt.round.down).toEqual(0.25);
    expect(opt.round.full).toEqual(0.6);
    expect(opt.round.up).toEqual(0.76);
    expect(opt.score).toBeUndefined();
    expect(opt.scoreName).toEqual('score');
    expect(opt.single).toBeFalsy();
    expect(opt.space).toBeTruthy();
    expect(opt.starHalf).toEqual('star-half.png');
    expect(opt.starOff).toEqual('star-off.png');
    expect(opt.starOn).toEqual('star-on.png');
    expect(opt.target).toBeUndefined();
    expect(opt.targetFormat).toEqual('{score}');
    expect(opt.targetKeep).toBeFalsy();
    expect(opt.targetText).toEqual('');
    expect(opt.targetType).toEqual('hint');
    expect(opt.width).toBeUndefined();
  });
});
