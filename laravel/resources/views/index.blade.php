<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel | React</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <style type="text/css">
            .invalid-feedback{
                display: block;
            }
        </style>
    </head>
    <body>
        <div id='root'></div>
        <script defer src="{{asset('js/app.js')}}"></script>
    </body>
</html>