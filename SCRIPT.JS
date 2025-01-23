{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;\red179\green179\blue179;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c0\c84706;\cssrgb\c75294\c75294\c75294;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
javascript\
\pard\pardeftab720\partightenfactor0

\f1\fs22 \cf3 \cb4 Copy
\f0\fs26 \cf0 \cb1 \
// Smooth scroll for internal links\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
}