vec2 ClipToScreen(in vec4 clip, in vec2 viewportSize)
{
  float x = viewportSize.x * (1.0f + clip.x / clip.w) * 0.5f;
  float y = viewportSize.y * (1.0f + clip.y / clip.w) * 0.5f;
  return vec2(x, y);
}


#pragma glslify: export(ClipToScreen)