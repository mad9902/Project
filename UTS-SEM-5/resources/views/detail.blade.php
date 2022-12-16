@extends('welcome')

@section('konten')
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 page-detail-left">
                    <div class="image rounded shadow-sm">
                        <img class="w-100 m-12 just" src="{{ $buku->image }}" alt="">
                    </div>
                </div>
                <div class="col-md-8 px-4">
                    <h2>Title : {{ $buku->title }} </h2>
                    <h2>Author: {{ $buku->author }}</h2>
                    <h2>Publisher: {{ $buku->publisher_id }}</h2>
                    <h2>Year: {{ $buku->year }}</h2>
                    <h2>Synopsis: {{ $buku->synopsis }}</h2>
                </div>
            </div>
        </div>
    </div>
@endsection
