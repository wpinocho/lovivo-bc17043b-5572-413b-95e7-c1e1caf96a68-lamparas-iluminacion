import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-0 shadow-sm overflow-hidden group hover-lift">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Lightbulb className="h-20 w-20 text-amber-300 opacity-30" />
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
              Destacada
            </span>
          )}
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-lg">
              {collection.name}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-white font-semibold group/btn transition-all"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}