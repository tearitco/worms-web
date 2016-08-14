import * as THREE from '../node_modules/three/build/three.js';

// Debug

export function assert(condition, message) {
    if (!condition) {
        throw message || 'Assertion failed';
    }
}

// Time

// Return current time in seconds.
export function time() {
    return Date.now()/1000;
}

// Math

export function rad(deg) {
    return deg * Math.PI / 180;
}

// Three.js helpers

export function F3(i, j, k) {
    return new THREE.Face3(i, j, k);
}

export function V3(x,y,z) {
    return new THREE.Vector3(x,y,z);
}

export function V2(x,y) {
    return new THREE.Vector2(x,y);
}

// Strings

export function letter_index(letter) {
    assert(letter.length === 1);
    assert(letter >= 'a');
    assert(letter <= 'z');
    var index = letter.charCodeAt(0) - 97;
    assert(index >= 0 && index <= 25);
    return index;
}
