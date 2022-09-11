<?php

function reverseWords($str) {
    $words = explode(" ", $str);
    
    $reversed_words = array();
    foreach ($words as $word) {
      array_push($reversed_words, strrev($word));
    }
    
    return implode(" ", $reversed_words);

    // alternative solution
    // return implode(" ", array_map(function ($item) { return strrev($item); }, explode(" ", $str)));
}