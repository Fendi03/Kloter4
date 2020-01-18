<?php

$x=0;
$y=1;
  

echo "$x $y";
 
for ($i=0; $i<10; $i++)
{
  $output = $x + $y;
  echo " $output";

  $x = $y;
  $y = $output;
}
 
?>