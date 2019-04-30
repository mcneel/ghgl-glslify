const float PI = 3.14159265358979;

vec2 equirectmap(in vec3 inDirection, in vec3 inNormal)
{
  vec3 R = reflect(inDirection, inNormal);
  
  R = vec3( -R.y, -R.z, R.x );
  float x = -R.z;
  float y = -R.x;
  float z = R.y;

  float theta, phi;

  if( x == 0.0 && y == 0.0 ) 
  {
    theta = 0.0;
    phi = ( z >= 0.0 ? 0.5*PI : -0.5*PI );
  }
  else 
  {
    theta = atan( y, x );
    if( theta < 0.0 )
      theta += 2.0*PI;

    float r;
    if ( abs( x ) >= abs( y ) ) 
    {
      r = y/x;
      r = abs(x)*sqrt(1.0+r*r);
    }
    else 
    {
      r = x/y;
      r = abs(y)*sqrt(1.0+r*r);
    }

    phi = atan( z/r );
  }

  float u = theta / (2.0*PI);
  float v = (-phi + 0.5*PI) / PI;

  return vec2(u, v);
}

#pragma glslify: export(equirectmap)