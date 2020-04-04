// Find the closest point to a line for a given point and return
// normalized parameter along line for this closest point
float ClosestPointToLineParameter(in vec3 point, in vec3 lineStart, in vec3 lineEnd) {
  vec3 direction = normalize(lineEnd - lineStart);
  vec3 v = point - lineStart;
  float d = dot(direction, v);
  return d / length(lineEnd-lineStart);
}


#pragma glslify: export(ClosestPointToLineParameter)