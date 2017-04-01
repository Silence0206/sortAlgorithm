(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// watchify testa.js -t [babelify] -o test_out.js -v
//从小到大排序
var ar = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

function shellSort(ar) {
	var n = ar.length;
	for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (var i = gap; i < n; i++) {
			if (ar[i] < ar[i - gap]) {
				var sign = ar[i];
				for (var j = i - gap; j >= 0 && sign < ar[j]; j -= gap) {
					ar[j + gap] = ar[j];
				}
				ar[j + gap] = sign;
			}
		}
	}
}
shellSort(ar);
console.log(ar);

},{}]},{},[1]);
