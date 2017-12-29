// shelf

function main() {
    return union(
        
        // fully constructed
        
        side().rotateY(-90).translate([13.5,0,0]),
        side().rotateY(-90).rotateZ(180).translate([0,8,0]),
        
        end_piece().translate([0,0,-((3/4)/2)]),
        end_piece().rotateY(180).translate([13.5,0,51.75+((3/4)/2)]),
        
        shelf().translate([3/8,0,(3/8)+11]),
        shelf().translate([3/8,0,(3/8)+11+(3/4)+10]),
        shelf().translate([3/8,0,(3/8)+11+(3/4)+10+(3/4)+9]),
        shelf().translate([3/8,0,(3/8)+11+(3/4)+10+(3/4)+9+(3/4)+9]),
        
        back().rotateX(90).translate([0,8+(3/4),-3/8]),
        
        // blown apart
        
        union(
        
            side().rotateY(-90).translate([13.5+2,0,0]),
            side().rotateY(-90).rotateZ(180).translate([-2,8,0]),
            
            end_piece().translate([0,0,-((3/4)/2)-1]),
            end_piece().rotateY(180).translate([13.5,0,51.75+((3/4)/2)+1]),
            
            shelf().translate([3/8,0,(3/8)+11]),
            shelf().translate([3/8,0,(3/8)+11+(3/4)+10]),
            shelf().translate([3/8,0,(3/8)+11+(3/4)+10+(3/4)+9]),
            shelf().translate([3/8,0,(3/8)+11+(3/4)+10+(3/4)+9+(3/4)+9]),
            
            back().rotateX(90).translate([0,8+(3/4)+2,-3/8])
        
        ).rotateZ(-45).translate([13.5*2,0,0]),
        
        // cuts on 8x4 sheet
        
        union(
            cube({size: [4*12,4*12,3/4]}).setColor(rgb(209,209,137)),
            
            cube({size: [4*12,4*12,3/4]}).setColor(rgb(9,209,137)).translate([0,4*12,0]),
            
            union(
                back(),
            
                side().rotateZ(90).translate([13.5+8+(1/16),0,0]),
                
                side().rotateZ(90).translate([13.5+8+(1/16)+8+(1/16),0,0]),
                
                end_piece().translate([13.5+8+(1/16)+8+(1/16)+(1/16),0,0]),
                
                end_piece().translate([13.5+8+(1/16)+8+(1/16)+(1/16),8+(1/16),0]),
                
                shelf().translate([13.5+8+(1/16)+8+(1/16)+(1/16),8+(1/16)+8+(1/16),0]),
                shelf().translate([13.5+8+(1/16)+8+(1/16)+(1/16),8+(1/16)+8+(1/16)+8+(1/16),0]),
                shelf().translate([13.5+8+(1/16)+8+(1/16)+(1/16),8+(1/16)+8+(1/16)+8+(1/16)+8+(1/16),0]),
                shelf().translate([13.5+8+(1/16)+8+(1/16)+(1/16),8+(1/16)+8+(1/16)+8+(1/16)+8+(1/16)+8+(1/16),0])
                
                
            ).translate([0,0,3/4])
            
        ).rotateX(90).translate([-5*12,0,0])
        
    ).translate([0,0,3/8]);
}

function side() {
    return cube({size: [51.75, 8, 3/4]}).subtract(
        union(
            cube({size: [3/4, 8, 3/8]}).translate([(3/8)+11,0,3/8]).setColor(1,0,1),
            cube({size: [3/4, 8, 3/8]}).translate([(3/8)+11+(3/4)+10,0,3/8]).setColor(1,0,1),
            cube({size: [3/4, 8, 3/8]}).translate([(3/8)+11+(3/4)+10+(3/4)+9,0,3/8]).setColor(1,0,1),
            cube({size: [3/4, 8, 3/8]}).translate([(3/8)+11+(3/4)+10+(3/4)+9+(3/4)+9,0,3/8]).setColor(1,0,1)
        )
    )
}

function end_piece() {
    return cube({size: [13.5, 8, 3/4]}).setColor(1,1,0).subtract(
        union(
            cube({size: [3/4, 8, 3/8]}).translate([0,0,3/8]).setColor(rgb(233,233,96)),
            cube({size: [3/4, 8, 3/8]}).translate([13.5-(3/4),0,3/8]).setColor(rgb(233,233,96))
        )
    )
}

function shelf() {
    return cube({size: [13.5-(3/4), 8, 3/4]}).setColor(0,1,1)
}

function back() {
    return cube({size: [13.5, 51.75+(3/4), 3/4]}).setColor(rgb(27,162,154))
}




function rgb(r,g,b) {
    return [r/255,g/255,b/255];
}
