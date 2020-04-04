vec4 ScreenToClip(in vec2 screenxy, in float clipZ, in float clipW, in vec2 viewportSize)
{
  float x = 2.0f * screenxy.x / viewportSize.x - 1.0f;
  float y = 2.0f * screenxy.y / viewportSize.y - 1.0f;
  return vec4(x * clipW, y * clipW, clipZ, clipW);
}


#pragma glslify: export(ScreenToClip)