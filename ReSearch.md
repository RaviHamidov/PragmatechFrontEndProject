## Lesson-01 [08/01/2022] & Lesson-02 [09/01/2022]

- Question: Basic Git Commands and meanings.

    ```
        > git init => Create an empty Git repository or reinitialize an existing one

        > git status => Show the working tree status

        > git add . => Add file contents to the index
 
        > git commit -m "Comment" => Record changes to the repository

        > git branch -M main => List, create, or delete branches

        > git log => Show commit logs

        > git remote => Manage set of tracked repositories

        > git push -u origin main/master => Update remote refs along with associated objects
    ```

## Lesson-03 [15/01/2022] & SelfReSearch

- Question: CSS Naming Convention 

    ```CSS
    > Most commonly used naming styles :

        > BEM
            .menu {
                /*
                    Some styles for 
                    menu here 
                */ ( <= Block )                                          

                &__item {
                    /* 
                        Some tyles for 
                        .menu__item here 
                    */ ( <= Element ) 

                    &--active {
                        /* 
                            Specific styles to the active 
                            .menu__item--active status 
                        */ ( <= Modifiers ) 
                    }

                    &--disabled {
                        /*
                            Specific styles to the active 
                            .menu__item--disabled status 
                        */ ( <= Modifiers ) 
                    }
                }
            }

        > Camel Case
            => fuzzyLogic

        > Pascal Case
            => FuzzyLogic

        > Kebab Case
            => fuzzy-logic

    > Other naming styles :

        > Flat Case
            => fuzzylogic

        > UpperFlat Case
            => FUZZYLOGIC

        > Snake Case
            => fuzzy_logic

        > Macro Case
            => FUZZY_LOGIC

        > Camel Snake Case
            => fuzzy_Logic

        > Pascal Snake Case
            => Fuzzy_Logic

        > Train Case
            => Fuzzy-Logic

        > Cobol Case
            => FUZZY-LOGIC

    ```
## Lesson-04 [22/01/2022] & Lesson-05 [23/01/2022]

## Lesson-06 [29/01/2022] & Lesson-07 [30/01/2022]

## Lesson-08 [05/02/2022] & Lesson-09 [06/02/2022]

## Lesson-09 [12/02/2022] & Lesson-10 [13/02/2022]

- JavaScript Fundamental Questions
    - In what areas is the Javascript programming language used ?

    ```
        JavaScript is mainly used for web-based applications and web browsers. 
        But JavaScript is also used beyond the Web in software, servers and embedded hardware controls. 
        Here are some basic things JavaScript is used for:

        > Adding interactive behavior to web pages

            JavaScript allows users to interact with web pages. There are almost no limits to the things 
            you can do with JavaScript on a web page these are just a few examples:

            > Show or hide more information with the click of a button
            > Change the color of a button when the mouse hovers over it
            > Slide through a carousel of images on the homepage
            > Zooming in or zooming out on an image
            > Displaying a timer or count-down on a website
            > Playing audio and video in a web page
            > Displaying animations
            > Using a drop-down hamburger menu

        > Creating web and mobile apps

            Developers can use various JavaScript frameworks for developing and building web and mobile apps.
            JavaScript frameworks are collections of JavaScript code libraries that provide developers with pre-written 
            code to use for routine programming features and tasks—literally a framework to build websites or 
            web applications around. Popular JavaScript front-end frameworks include React, React Native, Angular, and Vue. 
            Many companies use Node.js, a JavaScript runtime environment built on Google Chrome’s JavaScript V8 engine. 
            A few famous examples include Paypal, LinkedIn, Netflix, and Uber!

        > Building web servers and developing server applications 

            Beyond websites and apps, developers can also use JavaScript to build simple web servers and develop 
            the back-end infrastructure using Node.js. 

        > Game development

            Of course, you can also use JavaScript to create browser games. These are a great way 
            for beginning developers to practice their JavaScript skills. 
    

    ```

    ```
    > Write a brief explanation of the following programming terms
    
        > Compilers
            The compiler is software that converts a program written in a high-level language 
            (Source Language) to low-level language (Object/Target/Machine Language). 

        > Interpreters
            An interpreter converts high-level language into low-level machine language, just like a compiler. 
            But they are different in the way they read the input. The Compiler in one go reads the inputs, 
            does the processing, and executes the source code whereas the interpreter does the same line by line. 
            Compiler scans the entire program and translates it as a whole into machine code whereas 
            an interpreter translates the program one statement at a time Interpreted programs are usually 
            slower with respect to compiled ones.

        > Translators
            The most general term for a software code converting tool is “translator.” A translator, 
            in software programming terms, is a generic term that could refer to a compiler, assembler 
            or interpreter; anything that converts higher level code into another high-level 
            code (e.g., Basic, C++, Fortran, Java) or lower-level (i.e., a language that the processor can understand), 
            such as assembly language or machine code. If you don’t know what the tool actually does other than that 
            it accomplishes some level of code conversion to a specific target language, then you can safely 
            call it a translator.

        > Assemblers
            For every platform (Hardware + OS) we will have an assembler. They are
            not universal since for each platform we have one. The output of the assembler 
            is called an object file. Its translates assembly language to machine code.

        > Programming paradigms
        > Debugging
        > Boolean
        > Char
        > Null
        > Command-line
        > Interface
        > Low-level language, High-level language Both High level language and low level language 
        are the programming languages’s types.
        
        The main difference between high level language and low level language is that, Programmers 
        can easily understand or interpret or compile the high level language in comparison of machine. 
        On the other hand, Machine can easily understand the low level language in comparison of human beings. 
        Examples of high level languages are C, C++, Java, Python, etc.
        
        > Markup language 
    
    > To understand the working principle of a website, research and write the following concepts

        > What are the differences between the Internet and an intranet?
        > What do the terms server-side and client-side mean?
        > What is a server and how does it work?
        > What is a domain and how does it work?
        > What is HTTP and why do you need it?
        > Explain the differences between URL and URI expressions.
    ```

## Lesson-11 [19/02/2022] & Lesson-12 [20/02/2022]

## Lesson-13 [26/02/2022] & Lesson-14 [27/02/2022]

- JavaScript Fundamental Questions

    ```
    > What are the differences between Interpreter and Compiler Languages ?

        We generally write computer programs using a high-level language. A high-level language 
        is a language understandable by us. Most programming languages use keywords that contain 
        English words and phrases. But computers do not understand these words. 
        They only understand programs written with 0's and 1's called machine code.

        A program written in high-level language is called source code. The source code must be 
        converted to machine code before it can be run on a computer. This is done by either the 
        Compiler or the Interpreter.
    ```
    | Interpreter | Compiler |
    | --- | --- |
    | Runs the program line by line | Scans the entire program and translates it into machine code as a whole |
    | Doesn't waste time analyzing source code, But overall execution time is slower | Spends big time for analysis of source code, But overall execution time is faster |
    | Runs the program until there is any error, Stops where it sees the first error, So debugging is easy | Generates error message after scanning all source code, so debugging is relatively difficult |
    | Languages such as Python, Ruby, JavaScript use Interpreters | Languages such as C, C++ use Compilers|

    ```
    > What is the difference between Variables and Data Types ? What are they used for ?
    ```
    | Variables | Data Types |
    | --- | --- |
    | It is the name of memory location where we can store data | It describes the property of variables,and the data which stored in varibles depends on data type and operations also depends on the data type of the variables |


## Lesson-17 [12/03/2022] & Lesson-18 [13/03/2022]  

    19 mart axsamina qeder (maybe 22 00) yazilacaq

        