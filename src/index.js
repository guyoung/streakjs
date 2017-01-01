
var core = {
	bbox             :     require('./core/bbox'),
};

var container = {
	Group            :     require('./container/Group'),
}

var shape = {
    Arc             :     require('./graphic/shape/Arc'),
    BezierCurve     :     require('./graphic/shape/BezierCurve'),
    Circle          :     require('./graphic/shape/Circle'),
    Droplet         :     require('./graphic/shape/Droplet'),
    Ellipse         :     require('./graphic/shape/Ellipse'),
    Heart           :     require('./graphic/shape/Heart'),
    Isogon          :     require('./graphic/shape/Isogon'),
    Line            :     require('./graphic/shape/Line'),    
    Polyline        :     require('./graphic/shape/Polyline'),
    Polygon         :     require('./graphic/shape/Polygon'),
    Rect            :     require('./graphic/shape/Rect'),
    Ring            :     require('./graphic/shape/Ring'),
    Rose            :     require('./graphic/shape/Rose'),
    Sector          :     require('./graphic/shape/Sector'),
    Star            :     require('./graphic/shape/Star'),
    Trochoid        :     require('./graphic/shape/Trochoid')
};



var graphic = {
	
    shape           :     shape,

    Path        	:     require('./graphic/Path'),    

    Gradient        :     require('./graphic/Gradient'),    
    LinearGradient  :     require('./graphic/LinearGradient'),   
    RadialGradient  :     require('./graphic/RadialGradient'),   

    Text            :     require('./graphic/Text'),
	Image           :     require('./graphic/Image'),
}

var animation = {
    Animation       :     require('./animation/Animation'),    
}

module.exports = {
    zrender         :     require('./zrender'),
	
	core			:     core,
	container		:     container,

    graphic         :     graphic
    
    
 
};
