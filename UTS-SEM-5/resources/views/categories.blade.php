@extends('welcome')

@section('Judul_Halaman')
    Categories
@endsection


@section('konten')
    <div class="container-fluid bg-secondary w-75 p-2 mb-4">
        <div class="">
            <h1 class="text-white">{{ $categories->name }}</h1>
        </div>
    </div>

    <div class="row">
        @foreach ($bookcategory as $buku)
            <div class="col-md-3 mb-4">
                <div class="border p-3">
                    <img class="w-100 m-12 just" src="{{ $buku->book->image }}" alt="">
                    <p>{{ $buku->book->title }}</p>
                    <p>By</p>
                    <p>{{ $buku->book->author }}</p>
                    <a class="btn btn-primary" href="{{ url('/detail/' . $buku->id) }}">Detail</a>
                </div>
            </div>
        @endforeach

    </div>
@endsection
