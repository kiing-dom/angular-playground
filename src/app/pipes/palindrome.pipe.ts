import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: "palindrome",
})

export class PalindromePipe implements PipeTransform {
    transform(value: string) {
        let l = 0;
        let r = value.length - 1;

        while (l < r) {
            if(value[l] !== value[r]) {
                return "Not a Palindrome";
            }

            l++;
            r--;
        }
        
        return "Palindrome Confirmed";
    }
}