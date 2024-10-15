'use client';

import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Bookmark, Download, List, Star, Clock, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="flex items-center w-full sm:w-auto justify-between mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold text-primary">ModernLibre</h1>
          <Button variant="ghost" className="sm:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </Button>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end">
          <Button variant="outline" size="sm">Upload</Button>
          <Button variant="outline" size="sm">Tasks</Button>
          <Button variant="outline" size="sm">Admin</Button>
          <Button variant="ghost" size="sm">Logout</Button>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row mb-8">
        <div className={`w-full sm:w-1/4 pr-4 mb-4 sm:mb-0 ${sidebarOpen ? 'block' : 'hidden sm:block'}`}>
          <nav>
            <ul className="space-y-2">
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><BookOpen className="mr-2" size={18} /> Books</Link></li>
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><Download className="mr-2" size={18} /> Downloaded Books</Link></li>
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><Star className="mr-2" size={18} /> Top Rated Books</Link></li>
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><Clock className="mr-2" size={18} /> Recently Added</Link></li>
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><Bookmark className="mr-2" size={18} /> Categories</Link></li>
              <li><Link href="#" className="flex items-center text-gray-600 hover:text-primary"><List className="mr-2" size={18} /> Series</Link></li>
            </ul>
          </nav>
        </div>

        <div className="w-full sm:w-3/4">
          <div className="flex mb-4">
            <Input type="text" placeholder="Search Library" className="mr-2 flex-grow" />
            <Button>Search</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((book) => (
              <Card key={book}>
                <CardContent className="p-4">
                  <div className="w-full h-48 bg-gray-200 mb-2 rounded"></div>
                  <h3 className="font-semibold mb-1">Book Title {book}</h3>
                  <p className="text-sm text-gray-600">Author Name</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}