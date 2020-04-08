vec2 WorldToScreen(in vec3 point, in bool upperLeftOrigin, in mat4 w2s, in vec2 viewportSize)
{
  vec4 screen = w2s * vec4(point, 1.0);
  screen.xy /= screen.w;
  if (!upperLeftOrigin) {
    screen.y = viewportSize.y - screen.y;
  }
  return vec3(screen.x, screen.y);
}


#pragma glslify: export(WorldToSreen)