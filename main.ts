controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SMILE.isHittingTile(CollisionDirection.Bottom)) {
        SMILE.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let BARRLW: Sprite = null
let Barrel: Sprite = null
let SMILE: Sprite = null
tiles.setTilemap(tilemap`level10`)
SMILE = sprites.create(img`
    . . f f f f f . . 
    . f 5 5 5 5 5 f . 
    f 5 5 9 5 9 5 5 f 
    f 5 5 9 5 9 5 5 f 
    f 5 5 9 5 9 5 5 f 
    f 8 5 5 5 5 5 8 f 
    f 5 8 8 8 8 8 5 f 
    f f 5 5 5 5 5 f f 
    . f f f f f f f . 
    . . f f f f f . . 
    `, SpriteKind.Player)
tiles.placeOnTile(SMILE, tiles.getTileLocation(1, 5))
SMILE.ay = 500
game.onUpdateInterval(2000, function () {
    Barrel = sprites.createProjectileFromSide(img`
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67eeee....
        ......ee6eeeeee6cef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......beeeeeeeeeeb......
        .......beeeeeeeeb.......
        ........beeeeeeb........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, randint(-67, -66), 0)
    tiles.placeOnTile(Barrel, tiles.getTileLocation(9, 2))
    info.changeScoreBy(2)
})
game.onUpdateInterval(1000, function () {
    BARRLW = sprites.createProjectileFromSide(img`
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        `, randint(-100, -100), 0)
    tiles.placeOnTile(BARRLW, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
