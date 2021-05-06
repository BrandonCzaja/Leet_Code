/*
Given a text file file.txt that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

You may also assume each line in the text file must not contain leading or trailing white spaces.

Example:

Assume that file.txt has the following content:

987-123-4567
123 456 7890
(123) 456-7890
Your script should output the following valid phone numbers:

987-123-4567
(123) 456-7890

*/

// grep -e '^[0-9]\{3\}-[0-9]\{3\}-[0-9]\{4\}$' -e '^([0-9]\{3\}) [0-9]\{3\}-[0-9]\{4\}$' file.txt

// The grep command searches the given files for lines containing a match to a given pattern list. In other words, use the grep command to search words or strings in a text files. When it finds a match in a file, it will display those line on screen.
