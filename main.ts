namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a c 
`
}
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(true)
})
info.startCountdown(60)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . 
. . . . f d d d d d d f f f . . 
. . . f d d d f d d f d d f . . 
. . . f d d d d d d d d d f . . 
. . . f d d d d d d d d d d f . 
. . . f d d f d d d d f d d f . 
. . . f d d d f f f f d d d f . 
. . . f f d f d d d d f d f f . 
. . . . f d d d d d d d d f . . 
. . . . . f f f f d d f f f . . 
. . . . . . . . f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(146, 21)
tiles.setTilemap(tiles.createTilemap(
            hex`1400140001010101020204010303010101010202020202020102020202010101030301010101020201010101010201010101020202020101010102020101010101020101010102020202020202020202020202010102010202020202020202020202020202020201010201020202020202010202020201010102020101020101010101010101020202020201010202010102010202020202020202020102020201020201010201020202020202020202010202020202020101020101010101010101010101010102020202010102010202020202020202020202020202020201010201020201010102020202020202020202020101020102020101010101010101020101010101010102010202010102020101010102010101010101010201020201010202010101010201010101010101020102020101020201010101020101010101010102010202020102020102020202020202020201010201010101010202010101010101010101020101020202020202020202020202020202020202020101010101010101010101010101010101010202`,
            img`
2 2 2 2 . . . 2 . . 2 2 2 2 . . . . . . 
2 . . . . 2 2 2 . . 2 2 2 2 . . 2 2 2 2 
2 . 2 2 2 2 . . . . 2 2 2 2 . . 2 2 2 2 
2 . 2 2 2 2 . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . 2 . . . . 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 2 . . . . . 2 2 . . 2 
2 . 2 . . . . . . . . . 2 . . . 2 . . 2 
2 . 2 . . . . . . . . . 2 . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 . 2 . . . . . . . . . . . . . . . . 2 
2 . 2 . . 2 2 2 . . . . . . . . . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 . . 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 . . 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 . . 2 2 . . 2 2 2 2 . 2 2 2 2 2 2 
2 . 2 . . . 2 . . 2 . . . . . . . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5],
            TileScale.Sixteen
        ))
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
